'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authChecking, setAuthChecking] = useState<boolean>(true);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Change Password Modal State
  const [showPwdModal, setShowPwdModal] = useState<boolean>(false);
  const [oldPwd, setOldPwd] = useState<string>('');
  const [newPwd, setNewPwd] = useState<string>('');
  const [confirmPwd, setConfirmPwd] = useState<string>('');
  const [pwdMsg, setPwdMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // CMS State
  const [activeGame, setActiveGame] = useState<string>('game1');
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [selectedCatFilter, setSelectedCatFilter] = useState<string>('all');

  // Datasets
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [g1List, setG1List] = useState<any[]>([]);
  const [g2List, setG2List] = useState<any[]>([]);
  const [g3List, setG3List] = useState<any[]>([]);
  const [g4List, setG4List] = useState<any[]>([]);
  const [g5List, setG5List] = useState<any[]>([]);
  const [g6List, setG6List] = useState<any[]>([]);

  // Modal State for Game Items
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [formData, setFormData] = useState<any>({});

  // Check login state on mount
  useEffect(() => {
    const loggedIn = sessionStorage.getItem('cms_logged_in');
    if (loggedIn === 'true') {
      setIsAuthenticated(true);
      fetchAllData();
    }
    setAuthChecking(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        sessionStorage.setItem('cms_logged_in', 'true');
        setIsAuthenticated(true);
        fetchAllData();
      } else {
        setLoginError(data.error || 'Mật khẩu quản trị không chính xác!');
      }
    } catch (err) {
      setLoginError('Lỗi kết nối đến máy chủ.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('cms_logged_in');
    setIsAuthenticated(false);
    setPasswordInput('');
    setLoginError('');
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwdMsg(null);

    if (newPwd !== confirmPwd) {
      setPwdMsg({ type: 'error', text: 'Mật khẩu mới và xác nhận mật khẩu không khớp!' });
      return;
    }

    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldPassword: oldPwd, newPassword: newPwd }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setPwdMsg({ type: 'success', text: data.message || 'Đổi mật khẩu thành công!' });
        setTimeout(() => {
          setShowPwdModal(false);
          setOldPwd('');
          setNewPwd('');
          setConfirmPwd('');
          setPwdMsg(null);
        }, 1500);
      } else {
        setPwdMsg({ type: 'error', text: data.error || 'Đổi mật khẩu thất bại!' });
      }
    } catch (err) {
      setPwdMsg({ type: 'error', text: 'Lỗi kết nối máy chủ.' });
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/games');
      const data = await res.json();
      if (data.game1) {
        setCategories(data.game1.categories || []);
        setG1List(data.game1.items || []);
      }
      setG2List(data.game2 || []);
      setG3List(data.game3 || []);
      setG4List(data.game4 || []);
      setG5List(data.game5 || []);
      setG6List(data.game6 || []);
    } catch (err) {
      console.error('Failed to load data:', err);
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setEditingItem(null);
    if (activeGame === 'game1') {
      setFormData({ category_id: 0, left_text: '', right_text: '', example_en: '', example_vi: '' });
    } else if (activeGame === 'game2') {
      setFormData({ text: '', viHint: '', answers: '', alternatives: '' });
    } else if (activeGame === 'game3') {
      setFormData({ q: '', optA: '', optB: '', optC: '', optD: '', correct: 0 });
    } else if (activeGame === 'game4') {
      setFormData({ vi: '', hint: '', answers: '' });
    } else if (activeGame === 'game5') {
      setFormData({
        q: '',
        optA: '',
        meaningA: '',
        optB: '',
        meaningB: '',
        optC: '',
        meaningC: '',
        correct: 0,
      });
    } else if (activeGame === 'game6') {
      setFormData({
        question: '',
        text: '',
        viHint: '',
        answers: '',
        sample1: '',
        sample2: '',
        sample3: '',
      });
    }
    setModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingItem(item);
    if (activeGame === 'game1') {
      setFormData({
        id: item.id,
        category_id: item.category_id,
        left_text: item.left_text,
        right_text: item.right_text,
        example_en: item.example_en || '',
        example_vi: item.example_vi || '',
      });
    } else if (activeGame === 'game2') {
      setFormData({
        id: item.id,
        text: item.text,
        viHint: item.viHint,
        answers: (item.answers || []).join(', '),
        alternatives: (item.alternatives || []).join(', '),
      });
    } else if (activeGame === 'game3') {
      const opts = item.options || [];
      setFormData({
        id: item.id,
        q: item.q,
        optA: opts[0] || '',
        optB: opts[1] || '',
        optC: opts[2] || '',
        optD: opts[3] || '',
        correct: item.correct ?? 0,
      });
    } else if (activeGame === 'game4') {
      setFormData({
        id: item.id,
        vi: item.vi,
        hint: item.hint,
        answers: (item.answers || []).join('\n'),
      });
    } else if (activeGame === 'game5') {
      const opts = item.options || [];
      const details = item.options_detail || [];
      setFormData({
        id: item.id,
        q: item.q,
        optA: opts[0] || (details[0]?.word || ''),
        meaningA: details[0]?.meaning || '',
        optB: opts[1] || (details[1]?.word || ''),
        meaningB: details[1]?.meaning || '',
        optC: opts[2] || (details[2]?.word || ''),
        meaningC: details[2]?.meaning || '',
        correct: item.correct ?? 0,
      });
    } else if (activeGame === 'game6') {
      const samples = item.sampleAnswers || [];
      setFormData({
        id: item.id,
        question: item.question,
        text: item.text,
        viHint: item.viHint,
        answers: (item.answers || []).join(', '),
        sample1: samples[0] || '',
        sample2: samples[1] || '',
        sample3: samples[2] || '',
      });
    }
    setModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEdit = editingItem !== null;
    let payload: any = {};

    if (activeGame === 'game1') {
      payload = {
        id: formData.id,
        category_id: Number(formData.category_id) || 0,
        left_text: formData.left_text.trim(),
        right_text: formData.right_text.trim(),
        example_en: (formData.example_en || '').trim(),
        example_vi: (formData.example_vi || '').trim(),
      };
    } else if (activeGame === 'game2') {
      payload = {
        id: formData.id,
        text: formData.text.trim(),
        viHint: formData.viHint.trim(),
        answers: formData.answers.split(',').map((s: string) => s.trim()).filter(Boolean),
        alternatives: formData.alternatives ? formData.alternatives.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
      };
    } else if (activeGame === 'game3') {
      payload = {
        id: formData.id,
        q: formData.q.trim(),
        options: [formData.optA.trim(), formData.optB.trim(), formData.optC.trim(), formData.optD.trim()],
        correct: Number(formData.correct) || 0,
      };
    } else if (activeGame === 'game4') {
      payload = {
        id: formData.id,
        vi: formData.vi.trim(),
        hint: formData.hint.trim(),
        answers: formData.answers.split('\n').map((s: string) => s.trim()).filter(Boolean),
      };
    } else if (activeGame === 'game5') {
      payload = {
        id: formData.id,
        q: formData.q.trim(),
        options: [formData.optA.trim(), formData.optB.trim(), formData.optC.trim()],
        options_detail: [
          { word: formData.optA.trim(), meaning: formData.meaningA.trim() },
          { word: formData.optB.trim(), meaning: formData.meaningB.trim() },
          { word: formData.optC.trim(), meaning: formData.meaningC.trim() },
        ],
        correct: Number(formData.correct) || 0,
      };
    } else if (activeGame === 'game6') {
      payload = {
        id: formData.id,
        question: formData.question.trim(),
        text: formData.text.trim(),
        viHint: formData.viHint.trim(),
        answers: formData.answers.split(',').map((s: string) => s.trim()).filter(Boolean),
        sampleAnswers: [formData.sample1.trim(), formData.sample2.trim(), formData.sample3.trim()].filter(Boolean),
      };
    }

    try {
      const res = await fetch(`/api/games/${activeGame}`, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setModalOpen(false);
        fetchAllData();
      } else {
        const err = await res.json();
        alert('Lỗi lưu dữ liệu: ' + err.error);
      }
    } catch (err) {
      alert('Không thể kết nối đến máy chủ.');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa mục ID #${id} không?`)) return;

    try {
      const res = await fetch(`/api/games/${activeGame}?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchAllData();
      } else {
        const err = await res.json();
        alert('Lỗi xóa: ' + err.error);
      }
    } catch (err) {
      alert('Không thể kết nối máy chủ.');
    }
  };

  const handleReseed = async () => {
    if (!confirm('Khôi phục toàn bộ 6 Game về dữ liệu gốc? Các dữ liệu tự thêm/sửa sẽ bị đặt lại!')) return;

    try {
      const res = await fetch('/api/admin/reseed', { method: 'POST' });
      const data = await res.json();
      if (res.ok) {
        alert(data.message || 'Khôi phục thành công!');
        fetchAllData();
      } else {
        alert('Lỗi: ' + data.error);
      }
    } catch (err) {
      alert('Lỗi kết nối máy chủ.');
    }
  };

  // If initial auth check is loading, show brief blank/spinner
  if (authChecking) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem', color: '#57604c' }}>
        <i className="fas fa-spinner fa-spin fa-2x"></i>
      </div>
    );
  }

  // LOGIN SCREEN (No exposed password hint!)
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card">
          <div className="admin-login-icon">
            <i className="fas fa-lock"></i>
          </div>
          <h1 className="admin-login-title">Đăng nhập Quản trị CMS</h1>
          <p className="admin-login-subtitle">
            Khu vực dành riêng cho người quản trị. Vui lòng nhập mật khẩu để tiếp tục.
          </p>

          {loginError && <div className="login-error-alert">{loginError}</div>}

          <form onSubmit={handleLogin}>
            <div className="form-group" style={{ marginBottom: '1.2rem', textAlign: 'left' }}>
              <label>Mật khẩu quản trị:</label>
              <div className="password-input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Nhập mật khẩu..."
                  className="form-control"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="btn btn-success"
              style={{ width: '100%', padding: '10px', fontSize: '0.9rem' }}
            >
              {isLoggingIn ? (
                <>
                  <i className="fas fa-spinner fa-spin" style={{ marginRight: '6px' }}></i>
                  Đang xác thực...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt" style={{ marginRight: '6px' }}></i>
                  Đăng nhập
                </>
              )}
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #dfe3cf' }}>
            <Link
              href="/"
              className="btn btn-outline btn-sm"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              <i className="fas fa-arrow-left" style={{ marginRight: '6px' }}></i>
              Quay lại Game Arcade
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED CMS DASHBOARD
  return (
    <div className="admin-container">
      {/* Top Header */}
      <header className="admin-header">
        <div>
          <div className="admin-title">
            <span>🎬 CMS Quản Lý Từ Vựng & Game</span>
            <span className="db-badge">🟢 SQLite: arcade.db</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#57604c', marginTop: '4px' }}>
            Hệ thống quản trị CRUD nội dung cho 6 màn chơi Arcade
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-outline btn-sm" onClick={() => setShowPwdModal(true)}>
            <i className="fas fa-key" style={{ marginRight: '6px' }}></i>
            Đổi mật khẩu
          </button>
          <button className="btn btn-secondary btn-sm" onClick={handleReseed}>
            <i className="fas fa-undo" style={{ marginRight: '6px' }}></i>
            Khôi phục gốc
          </button>
          <Link href="/" className="btn btn-success btn-sm">
            <i className="fas fa-play" style={{ marginRight: '6px' }}></i>
            Về Game
          </Link>
          <button
            className="action-btn btn-delete"
            style={{ padding: '6px 12px', fontSize: '0.8rem', marginLeft: '4px' }}
            onClick={handleLogout}
            title="Đăng xuất khỏi CMS"
          >
            <i className="fas fa-sign-out-alt" style={{ marginRight: '4px' }}></i>
            Đăng xuất
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <div className="admin-stat-num">{g1List.length}</div>
          <div className="admin-stat-label">Game 1: Ghép nghĩa</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{g2List.length}</div>
          <div className="admin-stat-label">Game 2: Điền từ</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{g3List.length}</div>
          <div className="admin-stat-label">Game 3: Chọn nghĩa</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{g4List.length}</div>
          <div className="admin-stat-label">Game 4: Dịch câu</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{g5List.length}</div>
          <div className="admin-stat-label">Game 5: Collocations</div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-num">{g6List.length}</div>
          <div className="admin-stat-label">Game 6: IELTS Speaking</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        <button
          className={`admin-tab-btn ${activeGame === 'game1' ? 'active' : ''}`}
          onClick={() => { setActiveGame('game1'); setSearch(''); }}
        >
          🧩 Game 1: Ghép nghĩa ({g1List.length})
        </button>
        <button
          className={`admin-tab-btn ${activeGame === 'game2' ? 'active' : ''}`}
          onClick={() => { setActiveGame('game2'); setSearch(''); }}
        >
          ✍️ Game 2: Điền từ ({g2List.length})
        </button>
        <button
          className={`admin-tab-btn ${activeGame === 'game3' ? 'active' : ''}`}
          onClick={() => { setActiveGame('game3'); setSearch(''); }}
        >
          💡 Game 3: Chọn nghĩa ({g3List.length})
        </button>
        <button
          className={`admin-tab-btn ${activeGame === 'game4' ? 'active' : ''}`}
          onClick={() => { setActiveGame('game4'); setSearch(''); }}
        >
          📝 Game 4: Dịch câu ({g4List.length})
        </button>
        <button
          className={`admin-tab-btn ${activeGame === 'game5' ? 'active' : ''}`}
          onClick={() => { setActiveGame('game5'); setSearch(''); }}
        >
          🔗 Game 5: Collocations ({g5List.length})
        </button>
        <button
          className={`admin-tab-btn ${activeGame === 'game6' ? 'active' : ''}`}
          onClick={() => { setActiveGame('game6'); setSearch(''); }}
        >
          🗣️ Game 6: Trả lời câu hỏi ({g6List.length})
        </button>
      </div>

      {/* Content Area */}
      <div className="admin-card">
        <div className="admin-toolbar">
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="🔍 Tìm kiếm theo từ khóa..."
              className="admin-search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {activeGame === 'game1' && (
              <select
                className="form-control"
                style={{ width: 'auto', padding: '7px 12px' }}
                value={selectedCatFilter}
                onChange={(e) => setSelectedCatFilter(e.target.value)}
              >
                <option value="all">Tất cả chủ đề</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.id + 1}. {c.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <button className="btn btn-sm" onClick={openCreateModal}>
            <i className="fas fa-plus" style={{ marginRight: '6px' }}></i>
            Thêm mới
          </button>
        </div>

        {/* Tables */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#57604c' }}>
            <i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>
            Đang tải dữ liệu từ SQLite...
          </div>
        ) : (
          <div className="admin-table-wrapper">
            {/* Game 1 Table */}
            {activeGame === 'game1' && (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>ID</th>
                    <th style={{ width: '160px' }}>Chủ đề</th>
                    <th>Cụm từ tiếng Anh</th>
                    <th>Nghĩa tiếng Việt</th>
                    <th>Ví dụ câu</th>
                    <th style={{ width: '120px', textAlign: 'center' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {g1List
                    .filter((item) => {
                      if (selectedCatFilter !== 'all' && item.category_id !== Number(selectedCatFilter)) {
                        return false;
                      }
                      if (!search) return true;
                      const q = search.toLowerCase();
                      return (
                        item.left_text.toLowerCase().includes(q) ||
                        item.right_text.toLowerCase().includes(q) ||
                        (item.example_en && item.example_en.toLowerCase().includes(q))
                      );
                    })
                    .map((item) => {
                      const catName = categories.find((c) => c.id === item.category_id)?.name || `Nhóm ${item.category_id}`;
                      return (
                        <tr key={item.id}>
                          <td><b>#{item.id}</b></td>
                          <td><span className="pair-badge" style={{ fontSize: '0.65rem' }}>{catName}</span></td>
                          <td><b>{item.left_text}</b></td>
                          <td>{item.right_text}</td>
                          <td style={{ fontSize: '0.75rem', color: '#555' }}>
                            {item.example_en ? `"${item.example_en}"` : '-'}
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <button className="action-btn btn-edit" onClick={() => openEditModal(item)}>
                              <i className="fas fa-edit"></i> Sửa
                            </button>
                            <button className="action-btn btn-delete" onClick={() => handleDelete(item.id)}>
                              <i className="fas fa-trash"></i> Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}

            {/* Game 2 Table */}
            {activeGame === 'game2' && (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>ID</th>
                    <th>Câu điền (Blank)</th>
                    <th>Gợi ý tiếng Việt</th>
                    <th>Đáp án chính</th>
                    <th>Đáp án thay thế</th>
                    <th style={{ width: '120px', textAlign: 'center' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {g2List
                    .filter((item) => {
                      if (!search) return true;
                      const q = search.toLowerCase();
                      return (
                        item.text.toLowerCase().includes(q) ||
                        item.viHint.toLowerCase().includes(q) ||
                        item.answers.some((a: string) => a.toLowerCase().includes(q))
                      );
                    })
                    .map((item) => (
                      <tr key={item.id}>
                        <td><b>#{item.id}</b></td>
                        <td>{item.text}</td>
                        <td style={{ color: '#2c5f8a' }}>{item.viHint}</td>
                        <td>
                          {item.answers.map((a: string, i: number) => (
                            <span key={i} className="pair-badge" style={{ marginRight: '4px' }}>
                              {a}
                            </span>
                          ))}
                        </td>
                        <td style={{ fontSize: '0.75rem' }}>
                          {(item.alternatives || []).join(', ') || '-'}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <button className="action-btn btn-edit" onClick={() => openEditModal(item)}>
                            <i className="fas fa-edit"></i> Sửa
                          </button>
                          <button className="action-btn btn-delete" onClick={() => handleDelete(item.id)}>
                            <i className="fas fa-trash"></i> Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}

            {/* Game 3 Table */}
            {activeGame === 'game3' && (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>ID</th>
                    <th>Cụm từ tiếng Anh</th>
                    <th>Các lựa chọn</th>
                    <th style={{ width: '140px' }}>Đáp án đúng</th>
                    <th style={{ width: '120px', textAlign: 'center' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {g3List
                    .filter((item) => {
                      if (!search) return true;
                      const q = search.toLowerCase();
                      return item.q.toLowerCase().includes(q) || item.options.some((o: string) => o.toLowerCase().includes(q));
                    })
                    .map((item) => (
                      <tr key={item.id}>
                        <td><b>#{item.id}</b></td>
                        <td><b>{item.q}</b></td>
                        <td>
                          {item.options.map((opt: string, i: number) => (
                            <div key={i} style={{ fontSize: '0.75rem', color: i === item.correct ? '#2e7d32' : '#666' }}>
                              <b>{String.fromCharCode(65 + i)}.</b> {opt}
                            </div>
                          ))}
                        </td>
                        <td>
                          <span className="pair-badge" style={{ background: '#d4edda', color: '#155724' }}>
                            {String.fromCharCode(65 + item.correct)}: {item.options[item.correct]}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <button className="action-btn btn-edit" onClick={() => openEditModal(item)}>
                            <i className="fas fa-edit"></i> Sửa
                          </button>
                          <button className="action-btn btn-delete" onClick={() => handleDelete(item.id)}>
                            <i className="fas fa-trash"></i> Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}

            {/* Game 4 Table */}
            {activeGame === 'game4' && (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>ID</th>
                    <th>Câu tiếng Việt</th>
                    <th>Gợi ý từ khóa</th>
                    <th>Các đáp án tiếng Anh hợp lệ</th>
                    <th style={{ width: '120px', textAlign: 'center' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {g4List
                    .filter((item) => {
                      if (!search) return true;
                      const q = search.toLowerCase();
                      return item.vi.toLowerCase().includes(q) || item.hint.toLowerCase().includes(q);
                    })
                    .map((item) => (
                      <tr key={item.id}>
                        <td><b>#{item.id}</b></td>
                        <td><b>{item.vi}</b></td>
                        <td style={{ color: '#2c5f8a', fontSize: '0.75rem' }}>{item.hint}</td>
                        <td style={{ fontSize: '0.8rem' }}>
                          {item.answers.map((a: string, i: number) => (
                            <div key={i} style={{ marginBottom: '2px' }}>
                              • {a}
                            </div>
                          ))}
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <button className="action-btn btn-edit" onClick={() => openEditModal(item)}>
                            <i className="fas fa-edit"></i> Sửa
                          </button>
                          <button className="action-btn btn-delete" onClick={() => handleDelete(item.id)}>
                            <i className="fas fa-trash"></i> Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}

            {/* Game 5 Table */}
            {activeGame === 'game5' && (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>ID</th>
                    <th>Câu hỏi Collocation</th>
                    <th>Lựa chọn & Nghĩa</th>
                    <th>Đáp án đúng</th>
                    <th style={{ width: '120px', textAlign: 'center' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {g5List
                    .filter((item) => {
                      if (!search) return true;
                      const q = search.toLowerCase();
                      return item.q.toLowerCase().includes(q) || item.options.some((o: string) => o.toLowerCase().includes(q));
                    })
                    .map((item) => (
                      <tr key={item.id}>
                        <td><b>#{item.id}</b></td>
                        <td>{item.q}</td>
                        <td>
                          {(item.options_detail || []).map((od: any, i: number) => (
                            <div key={i} style={{ fontSize: '0.75rem' }}>
                              <b>{String.fromCharCode(65 + i)}. {od.word}</b>: {od.meaning}
                            </div>
                          ))}
                        </td>
                        <td>
                          <span className="pair-badge" style={{ background: '#d4edda', color: '#155724' }}>
                            {String.fromCharCode(65 + item.correct)}: {item.options[item.correct]}
                          </span>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <button className="action-btn btn-edit" onClick={() => openEditModal(item)}>
                            <i className="fas fa-edit"></i> Sửa
                          </button>
                          <button className="action-btn btn-delete" onClick={() => handleDelete(item.id)}>
                            <i className="fas fa-trash"></i> Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}

            {/* Game 6 Table */}
            {activeGame === 'game6' && (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th style={{ width: '50px' }}>ID</th>
                    <th>Câu hỏi IELTS</th>
                    <th>Câu điền từ & Gợi ý</th>
                    <th>Từ cần điền</th>
                    <th>Bài mẫu Band cao</th>
                    <th style={{ width: '120px', textAlign: 'center' }}>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {g6List
                    .filter((item) => {
                      if (!search) return true;
                      const q = search.toLowerCase();
                      return item.question.toLowerCase().includes(q) || item.text.toLowerCase().includes(q);
                    })
                    .map((item) => (
                      <tr key={item.id}>
                        <td><b>#{item.id}</b></td>
                        <td><b>{item.question}</b></td>
                        <td style={{ fontSize: '0.78rem' }}>
                          <div>{item.text}</div>
                          <div style={{ color: '#2c5f8a', marginTop: '2px' }}>💡 {item.viHint}</div>
                        </td>
                        <td>
                          {item.answers.map((a: string, i: number) => (
                            <span key={i} className="pair-badge" style={{ marginRight: '4px' }}>
                              {a}
                            </span>
                          ))}
                        </td>
                        <td style={{ fontSize: '0.72rem', color: '#555' }}>
                          {(item.sampleAnswers || []).length} câu mẫu
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <button className="action-btn btn-edit" onClick={() => openEditModal(item)}>
                            <i className="fas fa-edit"></i> Sửa
                          </button>
                          <button className="action-btn btn-delete" onClick={() => handleDelete(item.id)}>
                            <i className="fas fa-trash"></i> Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {/* Modal Change Password */}
      {showPwdModal && (
        <div className="modal-overlay" onClick={() => setShowPwdModal(false)}>
          <div className="modal-content" style={{ maxWidth: '420px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">🔑 Đổi mật khẩu quản trị</div>
              <button className="modal-close" onClick={() => setShowPwdModal(false)}>
                &times;
              </button>
            </div>

            {pwdMsg && (
              <div
                style={{
                  background: pwdMsg.type === 'success' ? '#e8f5e9' : '#ffebee',
                  color: pwdMsg.type === 'success' ? '#2e7d32' : '#c62828',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  marginBottom: '1rem',
                }}
              >
                {pwdMsg.text}
              </div>
            )}

            <form onSubmit={handleChangePassword}>
              <div className="form-group">
                <label>Mật khẩu cũ:</label>
                <input
                  type="password"
                  required
                  placeholder="Nhập mật khẩu hiện tại..."
                  className="form-control"
                  value={oldPwd}
                  onChange={(e) => setOldPwd(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu mới:</label>
                <input
                  type="password"
                  required
                  placeholder="Nhập mật khẩu mới..."
                  className="form-control"
                  value={newPwd}
                  onChange={(e) => setNewPwd(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Xác nhận mật khẩu mới:</label>
                <input
                  type="password"
                  required
                  placeholder="Nhập lại mật khẩu mới..."
                  className="form-control"
                  value={confirmPwd}
                  onChange={(e) => setConfirmPwd(e.target.value)}
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setShowPwdModal(false)}>
                  Hủy bỏ
                </button>
                <button type="submit" className="btn btn-success btn-sm">
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Form for Create/Edit Game Items */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                {editingItem ? `✏️ Chỉnh sửa #${editingItem.id}` : '➕ Thêm mới nội dung'}
              </div>
              <button className="modal-close" onClick={() => setModalOpen(false)}>
                &times;
              </button>
            </div>

            <form onSubmit={handleSave}>
              {/* Form Game 1 */}
              {activeGame === 'game1' && (
                <>
                  <div className="form-group">
                    <label>Chủ đề danh mục:</label>
                    <select
                      className="form-control"
                      value={formData.category_id}
                      onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.id + 1}. {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Cụm từ tiếng Anh:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.left_text}
                      onChange={(e) => setFormData({ ...formData, left_text: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Nghĩa tiếng Việt:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.right_text}
                      onChange={(e) => setFormData({ ...formData, right_text: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ví dụ tiếng Anh:</label>
                    <textarea
                      className="form-control"
                      value={formData.example_en}
                      onChange={(e) => setFormData({ ...formData, example_en: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Bản dịch ví dụ tiếng Việt:</label>
                    <textarea
                      className="form-control"
                      value={formData.example_vi}
                      onChange={(e) => setFormData({ ...formData, example_vi: e.target.value })}
                    />
                  </div>
                </>
              )}

              {/* Form Game 2 */}
              {activeGame === 'game2' && (
                <>
                  <div className="form-group">
                    <label>Câu hỏi (dùng &quot;______________&quot; cho chỗ trống):</label>
                    <textarea
                      required
                      className="form-control"
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gợi ý tiếng Việt:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.viHint}
                      onChange={(e) => setFormData({ ...formData, viHint: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Đáp án chính (phân cách bằng dấu phẩy nếu có nhiều):</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.answers}
                      onChange={(e) => setFormData({ ...formData, answers: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Đáp án thay thế hợp lệ (phân cách dấu phẩy):</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.alternatives}
                      onChange={(e) => setFormData({ ...formData, alternatives: e.target.value })}
                    />
                  </div>
                </>
              )}

              {/* Form Game 3 */}
              {activeGame === 'game3' && (
                <>
                  <div className="form-group">
                    <label>Cụm từ tiếng Anh:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.q}
                      onChange={(e) => setFormData({ ...formData, q: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Lựa chọn A:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.optA}
                      onChange={(e) => setFormData({ ...formData, optA: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Lựa chọn B:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.optB}
                      onChange={(e) => setFormData({ ...formData, optB: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Lựa chọn C:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.optC}
                      onChange={(e) => setFormData({ ...formData, optC: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Lựa chọn D:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.optD}
                      onChange={(e) => setFormData({ ...formData, optD: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Đáp án đúng:</label>
                    <select
                      className="form-control"
                      value={formData.correct}
                      onChange={(e) => setFormData({ ...formData, correct: Number(e.target.value) })}
                    >
                      <option value={0}>A ({formData.optA || 'Lựa chọn A'})</option>
                      <option value={1}>B ({formData.optB || 'Lựa chọn B'})</option>
                      <option value={2}>C ({formData.optC || 'Lựa chọn C'})</option>
                      <option value={3}>D ({formData.optD || 'Lựa chọn D'})</option>
                    </select>
                  </div>
                </>
              )}

              {/* Form Game 4 */}
              {activeGame === 'game4' && (
                <>
                  <div className="form-group">
                    <label>Câu tiếng Việt cần dịch:</label>
                    <textarea
                      required
                      className="form-control"
                      value={formData.vi}
                      onChange={(e) => setFormData({ ...formData, vi: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gợi ý từ khóa tiếng Anh:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.hint}
                      onChange={(e) => setFormData({ ...formData, hint: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Các câu tiếng Anh được chấp nhận (mỗi dòng một câu):</label>
                    <textarea
                      required
                      style={{ minHeight: '100px' }}
                      className="form-control"
                      value={formData.answers}
                      onChange={(e) => setFormData({ ...formData, answers: e.target.value })}
                    />
                  </div>
                </>
              )}

              {/* Form Game 5 */}
              {activeGame === 'game5' && (
                <>
                  <div className="form-group">
                    <label>Câu hỏi Collocation (có chỗ trống &quot;______&quot;):</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.q}
                      onChange={(e) => setFormData({ ...formData, q: e.target.value })}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div className="form-group">
                      <label>Từ A:</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={formData.optA}
                        onChange={(e) => setFormData({ ...formData, optA: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Nghĩa của A:</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={formData.meaningA}
                        onChange={(e) => setFormData({ ...formData, meaningA: e.target.value })}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div className="form-group">
                      <label>Từ B:</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={formData.optB}
                        onChange={(e) => setFormData({ ...formData, optB: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Nghĩa của B:</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={formData.meaningB}
                        onChange={(e) => setFormData({ ...formData, meaningB: e.target.value })}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div className="form-group">
                      <label>Từ C:</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={formData.optC}
                        onChange={(e) => setFormData({ ...formData, optC: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Nghĩa của C:</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={formData.meaningC}
                        onChange={(e) => setFormData({ ...formData, meaningC: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Đáp án đúng:</label>
                    <select
                      className="form-control"
                      value={formData.correct}
                      onChange={(e) => setFormData({ ...formData, correct: Number(e.target.value) })}
                    >
                      <option value={0}>A ({formData.optA || 'Lựa chọn A'})</option>
                      <option value={1}>B ({formData.optB || 'Lựa chọn B'})</option>
                      <option value={2}>C ({formData.optC || 'Lựa chọn C'})</option>
                    </select>
                  </div>
                </>
              )}

              {/* Form Game 6 */}
              {activeGame === 'game6' && (
                <>
                  <div className="form-group">
                    <label>Câu hỏi IELTS:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Câu điền khuyết (dùng &quot;______________&quot;):</label>
                    <textarea
                      required
                      className="form-control"
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gợi ý tiếng Việt:</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.viHint}
                      onChange={(e) => setFormData({ ...formData, viHint: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Đáp án từ/cụm từ (phân cách bằng dấu phẩy):</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      value={formData.answers}
                      onChange={(e) => setFormData({ ...formData, answers: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Câu trả lời mẫu 1:</label>
                    <textarea
                      className="form-control"
                      value={formData.sample1}
                      onChange={(e) => setFormData({ ...formData, sample1: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Câu trả lời mẫu 2:</label>
                    <textarea
                      className="form-control"
                      value={formData.sample2}
                      onChange={(e) => setFormData({ ...formData, sample2: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Câu trả lời mẫu 3:</label>
                    <textarea
                      className="form-control"
                      value={formData.sample3}
                      onChange={(e) => setFormData({ ...formData, sample3: e.target.value })}
                    />
                  </div>
                </>
              )}

              <div className="modal-footer">
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setModalOpen(false)}>
                  Hủy bỏ
                </button>
                <button type="submit" className="btn btn-success btn-sm">
                  Lưu thay đổi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

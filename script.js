// ナビゲーション関連
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// スクロール時のナビゲーション効果
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ハンバーガーメニューの動作（モバイル用）
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// アニメーション関連
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// 要素が画面に入った時のアニメーション
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // カウンターアニメーション
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
            }
            
            // スキルアイテムの遅延アニメーション
            if (entry.target.classList.contains('skill-item')) {
                const items = entry.target.parentElement.querySelectorAll('.skill-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// アニメーション対象の要素を設定
const animateElements = document.querySelectorAll('.experience-card, .project-card, .stat-card, .skill-item, .about-text, .contact-info, .contact-form');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// カウンターアニメーション
function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

// パーティクル効果（ヒーローセクション）
function createParticles() {
    const hero = document.querySelector('.hero');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    hero.appendChild(particlesContainer);
    
    // パーティクルを作成
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(37, 99, 235, 0.3);
        border-radius: 50%;
        pointer-events: none;
    `;
    
    // ランダムな位置と動きを設定
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.left = x + '%';
    particle.style.top = y + '%';
    particle.style.animation = `float ${duration}s ${delay}s infinite linear`;
    
    container.appendChild(particle);
}

// フローティングアニメーション用CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
        }
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .nav-menu.active {
        display: flex !important;
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 2rem;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        z-index: 999;
    }
    
    .nav-menu.active li {
        margin: 0.5rem 0;
    }
    
    .typing-effect {
        overflow: hidden;
        border-right: 2px solid var(--primary-color);
        white-space: nowrap;
        animation: typing 3s steps(30) 1s both, blink 1s infinite;
    }
    
    @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
    }
    
    @keyframes blink {
        50% { border-color: transparent; }
    }
`;
document.head.appendChild(style);

// EmailJS設定
const EMAILJS_CONFIG = {
    serviceID: 'YOUR_SERVICE_ID',     // EmailJSで取得したService ID
    templateID: 'YOUR_TEMPLATE_ID',   // EmailJSで取得したTemplate ID
    publicKey: 'YOUR_PUBLIC_KEY'      // EmailJSで取得したPublic Key
};

// フォーム送信処理（EmailJS使用）
const contactForm = document.querySelector('#contact-form');
const submitBtn = document.querySelector('#submit-btn');
const formStatus = document.querySelector('#form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // ボタンの状態をローディングに変更
        setButtonLoading(true);
        showFormStatus('送信中です...', 'loading');
        
        try {
            // EmailJSを使用してメール送信
            const formData = new FormData(this);
            const templateParams = {
                from_name: formData.get('from_name'),
                from_email: formData.get('from_email'),
                company: formData.get('company') || '未記入',
                project_type: formData.get('project_type') || '未選択',
                budget: formData.get('budget') || '未選択',
                timeline: formData.get('timeline') || '未選択',
                message: formData.get('message'),
                to_email: 'hello@example.com' // 受信用メールアドレスに変更
            };
            
            // EmailJS送信（設定が完了している場合）
            if (EMAILJS_CONFIG.serviceID !== 'YOUR_SERVICE_ID') {
                await emailjs.send(
                    EMAILJS_CONFIG.serviceID,
                    EMAILJS_CONFIG.templateID,
                    templateParams,
                    EMAILJS_CONFIG.publicKey
                );
                
                showFormStatus('✅ お問い合わせありがとうございます！24時間以内にご返信いたします。', 'success');
                this.reset();
            } else {
                // 開発/デモ用の疑似送信
                await simulateEmailSend(templateParams);
                showFormStatus('✅ お問い合わせありがとうございます！（デモモード: 実際のメール送信にはEmailJS設定が必要です）', 'success');
                this.reset();
            }
            
        } catch (error) {
            console.error('メール送信エラー:', error);
            showFormStatus('❌ 送信に失敗しました。しばらく経ってから再度お試しください。', 'error');
        } finally {
            setButtonLoading(false);
        }
    });
}

// フォームステータス表示
function showFormStatus(message, type) {
    if (!formStatus) return;
    
    formStatus.textContent = message;
    formStatus.className = `form-status show ${type}`;
    
    // 成功時は5秒後に自動非表示
    if (type === 'success') {
        setTimeout(() => {
            formStatus.classList.remove('show');
        }, 5000);
    }
}

// ボタンローディング状態
function setButtonLoading(isLoading) {
    if (!submitBtn) return;
    
    if (isLoading) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
    } else {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// 疑似メール送信（デモ用）
function simulateEmailSend(templateParams) {
    return new Promise((resolve) => {
        console.log('📧 送信内容（デモ）:', templateParams);
        setTimeout(resolve, 2000); // 2秒の疑似処理時間
    });
}

// フォーム入力値のリアルタイム検証
function setupFormValidation() {
    const requiredFields = contactForm.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        field.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

// 個別フィールド検証
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // 必須チェック
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = '必須項目です';
    }
    
    // メールアドレス形式チェック
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = '正しいメールアドレスを入力してください';
        }
    }
    
    // エラー表示の切り替え
    field.classList.toggle('error', !isValid);
    
    let errorElement = field.parentNode.querySelector('.field-error');
    if (!isValid && errorMessage) {
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'field-error';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = errorMessage;
    } else if (errorElement) {
        errorElement.remove();
    }
    
    return isValid;
}

// EmailJS初期化（設定が完了している場合）
function initializeEmailJS() {
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('📧 EmailJS初期化完了');
    } else {
        console.log('📧 EmailJS設定待機中（デモモードで動作）');
    }
}

// 画面読み込み完了時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // EmailJS初期化
    initializeEmailJS();
    
    // フォーム検証設定
    if (contactForm) {
        setupFormValidation();
    }
    
    // パーティクル効果を追加
    createParticles();
    
    // タイピング効果をヒーロータイトルに追加
    const heroMain = document.querySelector('.hero-main');
    if (heroMain) {
        setTimeout(() => {
            heroMain.classList.add('typing-effect');
        }, 500);
    }
    
    // 初期アニメーション
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }
    
    if (heroVisual) {
        heroVisual.style.opacity = '0';
        heroVisual.style.transform = 'translateX(30px)';
        heroVisual.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroVisual.style.opacity = '1';
            heroVisual.style.transform = 'translateX(0)';
        }, 600);
    }
});

// パフォーマンス最適化: スクロールイベントのスロットリング
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
        // スクロール位置に基づいたナビゲーションのアクティブ状態更新
        updateActiveNavigation();
    }, 10);
});

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// 開発者向けのコンソールメッセージ
console.log(`
🚀 Portfolio Site Loaded Successfully
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built with ❤️ for an experienced Web Director
Features:
- Responsive Design
- Smooth Animations
- Interactive Elements
- Modern UI/UX
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`); 
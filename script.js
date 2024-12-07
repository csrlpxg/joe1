window.onload = function() {
    const targetUrl = 'https://ja.wikipedia.org/wiki/';  // 替换为目标 URL
    document.getElementById('message').textContent = 'Webサイトの安全なジャンプ中...';  // 设置提示消息为日文

    // 延迟 1 秒后跳转
    setTimeout(() => {
        window.location.replace(targetUrl);  // 动态跳转
    }, 1000);  // 延迟 1 秒
};

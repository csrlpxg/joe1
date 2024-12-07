<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Redirecting...</title>
<script>
    window.onload = function() {
        const targetUrl = 'https://ja.wikipedia.org/wiki/'; // 替换为目标 URL
        document.getElementById('message').textContent = 'Webサイトの安全なジャンプ中...'; // 设置提示消息

        // 延迟 1 秒后跳转
        setTimeout(() => {
            window.location.replace(targetUrl);  // 动态跳转
        }, 1000);  // 延迟 1 秒
    };
</script>
</head>
<body>
  <p id="message">Redirecting...</p>  <!-- 默认显示的消息 -->
</body>
</html>

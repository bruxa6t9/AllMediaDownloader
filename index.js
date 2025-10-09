
const socialmediadl = require('./ST');

async function testDownload() {
  try {
    // Test 1: Auto-detection with YouTube
    console.log('Test 1: YouTube Auto-detection');
    const youtubeResult = await socialmediadl.download('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    console.log('Platform:', youtubeResult.platform);
    console.log('Data:', JSON.stringify(youtubeResult.data, null, 2));
    console.log('\n---\n');

    // Test 2: Direct TikTok function
    console.log('Test 2: Direct TikTok function');
    const tiktokResult = await socialmediadl.fetchTiktokData('https://www.tiktok.com/@user/video/123456789');
    console.log('Data:', JSON.stringify(tiktokResult, null, 2));
    console.log('\n---\n');

    // Test 3: Auto-detection with Instagram
    console.log('Test 3: Instagram Auto-detection');
    const instaResult = await socialmediadl.download('https://www.instagram.com/p/ABC123/');
    console.log('Platform:', instaResult.platform);
    console.log('Data:', JSON.stringify(instaResult.data, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run tests
testDownload();

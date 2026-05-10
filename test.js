//This is just a test, not main file

const allmediadl = require('./bruxa');

async function testDownload() {
  try {
    // Test 1: Auto-detection with YouTube
    console.log('Test 1: YouTube Auto-detection');
    const youtubeResult = await allmediadl.download('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    console.log('Platform:', youtubeResult.platform);
    console.log('Data:', JSON.stringify(youtubeResult.data, null, 2));
    console.log('\n---\n');

    // Test 2: Direct TikTok function
    console.log('Test 2: Direct TikTok function');
    const tiktokResult = await allmediadl.fetchTiktokData('https://www.tiktok.com/@sumaiya_mimu/video/7556912711913803015?is_from_webapp=1&sender_device=pc');
    console.log('Data:', JSON.stringify(tiktokResult, null, 2));
    console.log('\n---\n');

    // Test 3: Auto-detection with Instagram
    console.log('Test 3: Instagram Auto-detection');
    const instaResult = await allmediadl.download('https://www.instagram.com/reel/DPQvNXpjkSb/?igsh=MWRqeWE3eXZjMnBsag==');
    console.log('Platform:', instaResult.platform);
    console.log('Data:', JSON.stringify(instaResult.data, null, 2));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run tests
testDownload();

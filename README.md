
# socialmediadl

[![npm version](https://img.shields.io/npm/v/AllMediadl.svg)](https://www.npmjs.com/package/AllMediadl)
[![GitHub stars](https://img.shields.io/github/stars/bruxa6t9/AllMediaDownloader?style=social)](https://github.com/bruxa6t9/AllMediaDownloader/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/bruxa6t9/AllMediaDownloader?style=social)](https://github.com/bruxa6t9/AllMediaDownloader/network/members)

A universal All social media downloader package for Node.js.  
Download media from 19+ platforms including LinkedIn, Threads, Reddit, Facebook, Instagram, TikTok, YouTube, Pinterest, Twitter, and more — with auto-detection and easy-to-use API.

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=bruxa6t9/AllMediaDownloader&type=Date)](https://www.star-history.com/#bruxa6t9/AllMediaDownloader&Date)

---

## ✨ Features

- **Auto-Detection**: Automatically detects platform from URL
- **19+ Platforms Supported**:
  - Bluesky
  - CapCut
  - Dailymotion
  - Douyin
  - Facebook & Instagram
  - Kuaishou
  - LinkedIn
  - Pinterest
  - Reddit
  - Snapchat
  - Soundcloud
  - Spotify
  - Threads
  - TikTok
  - Tumblr
  - Twitter (X)
  - YouTube
- **Smart Redirect Handling**: Handles YouTube and other platform redirects seamlessly
- **Easy Integration**: Simple function-based API
- **TypeScript Ready**: Works seamlessly with TypeScript projects

---

## 🚀 Installation

```bash
npm install AllMediadl
```

Or with yarn:

```bash
yarn add AllMediadl
```

Or with pnpm:

```bash
pnpm add AllMediadl
```

---

## 📖 Usage

### Basic Usage (Auto-Detection)

The easiest way to use socialmediadl is with the auto-detection feature:

```javascript
const AllMediadl = require('AllMediadl');

async function downloadMedia() {
  try {
    // Auto-detect platform and download
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const result = await AllMediadl.download(url);

    console.log('Platform:', result.platform); // 'youtube'
    console.log('Data:', result.data); // Media download info
  } catch (error) {
    console.error('Error:', error.message);
  }
}

downloadMedia();
```

**Response Format:**
```javascript
{
  platform: 'youtube',  // Detected platform name
  data: {
    // Platform-specific media download information
    // (varies by platform)
  }
}
```

### Platform-Specific Downloads

For more control, use platform-specific functions:

```javascript
const { 
  fetchYoutubeData,
  fetchTiktokData,
  fetchMetaData,
  fetchTwitterData 
} = require('AllMediaadl');

async function examples() {
  // YouTube
  const youtubeData = await fetchYoutubeData('https://youtube.com/watch?v=...');

  // TikTok
  const tiktokData = await fetchTiktokData('https://tiktok.com/@user/video/...');

  // Facebook/Instagram
  const metaData = await fetchMetaData('https://instagram.com/p/...');

  // Twitter/X
  const twitterData = await fetchTwitterData('https://twitter.com/user/status/...');
}
```

### Error Handling

Always wrap your calls in try-catch blocks:

```javascript
const AllMediadl = require('AllMediadl');

async function safeDownload(url) {
  try {
    const result = await AllMediadl.download(url);
    return result;
  } catch (error) {
    if (error.message.includes('not supported')) {
      console.error('Platform not supported:', url);
    } else {
      console.error('Download error:', error.message);
    }
    return null;
  }
}
```

---

## 🔗 API Reference

### Main Function

#### `AllMediadl.download(url)`

Auto-detects platform and downloads media.

**Parameters:**
- `url` (string): The social media URL

**Returns:**
```javascript
Promise<{
  platform: string,  // Detected platform name
  data: object      // Media download information
}>
```

**Throws:**
- Error if URL is missing
- Error if platform is not supported

---

### Platform-Specific Functions

All platform functions return a Promise with platform-specific data:

| Function | Platform | Example URL |
|----------|----------|-------------|
| `fetchBlueskyData(url)` | Bluesky | `https://bsky.app/...` |
| `fetchCapcutData(url)` | CapCut | `https://capcut.com/...` |
| `fetchDailymotionData(url)` | Dailymotion | `https://dailymotion.com/...` |
| `fetchDouyinData(url)` | Douyin | `https://douyin.com/...` |
| `fetchMetaData(url)` | Facebook/Instagram | `https://instagram.com/p/...` |
| `fetchKuaishouData(url)` | Kuaishou | `https://kuaishou.com/...` |
| `fetchLinkedinData(url)` | LinkedIn | `https://linkedin.com/...` |
| `fetchPinterestMedia(url)` | Pinterest | `https://pinterest.com/pin/...` |
| `fetchRedditData(url)` | Reddit | `https://reddit.com/r/...` |
| `fetchSnapchatData(url)` | Snapchat | `https://snapchat.com/...` |
| `fetchSoundcloudData(url)` | Soundcloud | `https://soundcloud.com/...` |
| `fetchSpotify(url)` | Spotify | `https://spotify.com/track/...` |
| `fetchThreadsData(url)` | Threads | `https://threads.net/...` |
| `fetchTiktokData(url)` | TikTok | `https://tiktok.com/@user/video/...` |
| `fetchTumblrData(url)` | Tumblr | `https://tumblr.com/...` |
| `fetchTwitterData(url)` | Twitter/X | `https://twitter.com/user/status/...` |
| `fetchYoutubeData(url)` | YouTube | `https://youtube.com/watch?v=...` |

**Example:**
```javascript
const { fetchYoutubeData } = require('AllMediadl');

const data = await fetchYoutubeData('https://youtube.com/watch?v=...');
console.log(data);
```

---

## 📦 Available Exports

```javascript
const AllMediadl = require('AllMediadl');

// Main function
AllMediadl.download(url)

// All platform-specific functions
const {
  fetchBlueskyData,
  fetchCapcutData,
  fetchDailymotionData,
  fetchDouyinData,
  fetchMetaData,
  fetchKuaishouData,
  fetchLinkedinData,
  fetchPinterestMedia,
  fetchRedditData,
  fetchSnapchatData,
  fetchSoundcloudData,
  fetchSpotify,
  fetchThreadsData,
  fetchTiktokData,
  fetchTumblrData,
  fetchTwitterData,
  fetchYoutubeData
} = AllMediadl;
```

---

## 🛠️ Technical Details

- **Smart URL Detection**: Automatically identifies platform from URL patterns
- **Enhanced Axios Configuration**: Handles redirects from YouTube and other platforms
- **Modular Architecture**: Each platform has its own service module
- **Error Handling**: Comprehensive error handling with meaningful messages
- **No Server Required**: Pure module package, no HTTP server needed

---

## 🏗️ Project Structure

```
.
├── config/            # Configuration files (axios setup)
├── services/          # Platform-specific downloader functions
├── index.js           # Main module exports
├── test.js            # Example test file
├── package.json       # Package metadata
└── README.md          # Documentation
```

---

## 🧪 Testing

Run the included test file to see examples:

```bash
node test.js
```

Or create your own test:

```javascript
const AllMediadl = require('AllMediadl');

async function myTest() {
  const result = AllMediadl.download('YOUR_URL_HERE');
  console.log(result);
}

myTest();
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Open issues for bugs or feature requests
- Submit pull requests for improvements
- Add support for new platforms

---

## 👨‍💻 Author

**Rakib Adil**  
GitHub: [@bruxa6t9](https://github.com/bruxa6t9)  
Repository: [AllMediadl](https://github.com/bruxa6t9/AllMediadl.git)

---

## 📝 License

This project is open source and available for use.

---

## 🌟 Show Your Support

If you find this package useful, please consider giving it a ⭐ on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/bruxa6t9/AllMediadl?style=social)](https://github.com/bruxa6t9/AllMediadl/stargazers)


// Import all services
const { fetchBlueskyData } = require("./services/blueskyService");
const { fetchCapcutData } = require("./services/capcutService");
const { fetchDailymotionData } = require("./services/dailymotionService");
const { fetchDouyinData } = require("./services/douyinService");
const { fetchMetaData } = require("./services/facebookInstaService");
const { fetchKuaishouData } = require("./services/kuaishouService");
const { fetchLinkedinData } = require("./services/linkedinService");
const { fetchPinterestMedia } = require("./services/pinterestService");
const { fetchRedditData } = require("./services/redditService");
const { fetchSnapchatData } = require("./services/snapchatService");
const { fetchSoundcloudData } = require("./services/soundcloudService");
const { fetchSpotify } = require("./services/spotifyService");
const { fetchThreadsData } = require("./services/threadsService");
const { fetchTiktokData } = require("./services/tiktokService");
const { fetchTumblrData } = require("./services/tumblrService");
const { fetchTwitterData } = require("./services/twitterService");
const { fetchYoutubeData } = require("./services/youtubeService");

// Platform detection function
function detectPlatform(urlString) {
  const lowerUrl = urlString.toLowerCase();
  
  if (lowerUrl.includes('bluesky.app')) return 'bluesky';
  if (lowerUrl.includes('capcut.com')) return 'capcut';
  if (lowerUrl.includes('dailymotion.com')) return 'dailymotion';
  if (lowerUrl.includes('douyin.com')) return 'douyin';
  if (lowerUrl.includes('facebook.com') || lowerUrl.includes('instagram.com') || lowerUrl.includes('fb.watch')) return 'meta';
  if (lowerUrl.includes('kuaishou.com')) return 'kuaishou';
  if (lowerUrl.includes('linkedin.com')) return 'linkedin';
  if (lowerUrl.includes('pinterest.com') || lowerUrl.includes('pin.it')) return 'pinterest';
  if (lowerUrl.includes('reddit.com') || lowerUrl.includes('redd.it')) return 'reddit';
  if (lowerUrl.includes('snapchat.com')) return 'snapchat';
  if (lowerUrl.includes('soundcloud.com')) return 'soundcloud';
  if (lowerUrl.includes('spotify.com')) return 'spotify';
  if (lowerUrl.includes('threads.net')) return 'threads';
  if (lowerUrl.includes('tiktok.com') || lowerUrl.includes('vt.tiktok.com') || lowerUrl.includes('vm.tiktok.com')) return 'tiktok';
  if (lowerUrl.includes('tumblr.com')) return 'tumblr';
  if (lowerUrl.includes('twitter.com') || lowerUrl.includes('x.com') || lowerUrl.includes('t.co')) return 'twitter';
  if (lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be')) return 'youtube';
  
  return null;
}

// Service mapping function
function getServiceFunction(platform) {
  const serviceMap = {
    bluesky: fetchBlueskyData,
    capcut: fetchCapcutData,
    dailymotion: fetchDailymotionData,
    douyin: fetchDouyinData,
    meta: fetchMetaData,
    kuaishou: fetchKuaishouData,
    linkedin: fetchLinkedinData,
    pinterest: fetchPinterestMedia,
    reddit: fetchRedditData,
    snapchat: fetchSnapchatData,
    soundcloud: fetchSoundcloudData,
    spotify: fetchSpotify,
    threads: fetchThreadsData,
    tiktok: fetchTiktokData,
    tumblr: fetchTumblrData,
    twitter: fetchTwitterData,
    youtube: fetchYoutubeData
  };
  
  return serviceMap[platform];
}

// Main download function with auto-detection
async function download(url) {
  if (!url) {
    throw new Error("URL is required");
  }

  const platform = detectPlatform(url);
  
  if (!platform) {
    throw new Error("Platform not supported or URL not recognized");
  }

  const serviceFunc = getServiceFunction(platform);
  const data = await serviceFunc(url);
  
  return {
    platform,
    data
  };
}

// Export all functions
module.exports = {
  // Main function
  download,
  
  // Platform-specific functions
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
};

#!/usr/bin/env node

/**
 * Automated Accessibility Testing with pa11y
 *
 * This script runs accessibility tests on key pages of the application.
 * It checks for WCAG 2.2 Level AA compliance.
 *
 * Usage:
 *   npm run test:a11y
 */

import pa11y from 'pa11y';

const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

const pages = [
  { name: 'Home', url: `${BASE_URL}` },
  { name: '저시력이란?', url: `${BASE_URL}/diagnosis/what-is-low-vision` },
  { name: '원인 질환', url: `${BASE_URL}/diagnosis/causes` },
  { name: '진단 직후 가이드', url: `${BASE_URL}/diagnosis/first-steps` },
  { name: '저시력과 마음 건강', url: `${BASE_URL}/adaptation/mental-health` },
  { name: '가족 및 보호자 지원', url: `${BASE_URL}/adaptation/family-support` },
  { name: '최신 보조공학', url: `${BASE_URL}/daily-life/assistive-tech` },
  { name: '재활 및 교육', url: `${BASE_URL}/daily-life/rehabilitation` },
  { name: '권리와 복지', url: `${BASE_URL}/rights/welfare-benefits` },
  { name: '협회 소식', url: `${BASE_URL}/community` },
  { name: '협회 역사', url: `${BASE_URL}/about/history` },
];

const pa11yOptions = {
  // WCAG 2.2 Level AA standard
  standard: 'WCAG2AA',

  // Ignore specific issues if needed
  ignore: [
    // Add rule codes to ignore here
  ],

  // Browser options
  chromeLaunchConfig: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },

  // Wait for page to load
  wait: 1000,

  // Viewport size (mobile + desktop)
  viewport: {
    width: 1280,
    height: 1024,
  },
};

async function testPage(page) {
  console.log(`\n🔍 Testing: ${page.name}`);
  console.log(`   URL: ${page.url}`);

  try {
    const results = await pa11y(page.url, pa11yOptions);

    if (results.issues.length === 0) {
      console.log(`   ✅ No accessibility issues found!`);
      return { passed: true, issues: [] };
    } else {
      console.log(`   ❌ Found ${results.issues.length} issue(s):`);
      results.issues.forEach((issue, index) => {
        console.log(
          `      ${index + 1}. [${issue.type.toUpperCase()}] ${issue.message}`
        );
        console.log(`         ${issue.selector}`);
        console.log(`         Code: ${issue.code}`);
      });
      return { passed: false, issues: results.issues };
    }
  } catch (error) {
    console.error(`   ⚠️  Error testing page: ${error.message}`);
    return { passed: false, error: error.message };
  }
}

async function runTests() {
  console.log('🎯 Starting Accessibility Tests');
  console.log(`   Base URL: ${BASE_URL}`);
  console.log(`   Standard: WCAG 2.2 Level AA`);
  console.log('─'.repeat(60));

  const results = [];

  for (const page of pages) {
    const result = await testPage(page);
    results.push({ page: page.name, ...result });
  }

  console.log('\n' + '─'.repeat(60));
  console.log('📊 Test Summary');
  console.log('─'.repeat(60));

  const passed = results.filter((r) => r.passed).length;
  const failed = results.filter((r) => !r.passed).length;
  const totalIssues = results.reduce(
    (sum, r) => sum + (r.issues?.length || 0),
    0
  );

  console.log(`   ✅ Passed: ${passed}/${pages.length}`);
  console.log(`   ❌ Failed: ${failed}/${pages.length}`);
  console.log(`   🐛 Total Issues: ${totalIssues}`);

  if (failed > 0) {
    console.log('\n⚠️  Some pages have accessibility issues.');
    console.log('   Please review and fix the issues above.');
    process.exit(1);
  } else {
    console.log('\n✨ All pages passed accessibility tests!');
    process.exit(0);
  }
}

// Handle errors
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run tests
runTests();

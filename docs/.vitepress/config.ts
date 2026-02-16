import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ML Beginners",
  description: "Machine Learning Course By Microsoft",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/microsoft/ML-For-Beginners' }
    ],
    search: {
      provider: 'local'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'Git & GitHub Masterclass',
      description: 'Learn Git and GitHub from Zero to Hero',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Course', link: '/en/1-Intro-to-Git/README' }
        ],
        sidebar: [
          {
            text: 'Git & GitHub Course',
            items: [
              { text: '1. Introduction', link: '/en/1-Intro-to-Git/README' },
              { text: '2. Core Workflow', link: '/en/2-Basic-Workflow/README' },
              { text: '3. Branching & Merging', link: '/en/3-Branching-Merging/README' },
              { text: '4. GitHub Collaboration', link: '/en/4-GitHub-Collaboration/README' },
              { text: '5. Best Practices', link: '/en/5-Best-Practices-Conventions/README' },
            ]
          }
        ],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2024-present'
        }
      }
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      link: '/ar/',
      title: 'دورة Git و GitHub الشاملة',
      description: 'تعلم الـ Git والـ Github من الصفر للاحتراف',
      themeConfig: {
        nav: [
          { text: 'الرئيسية', link: '/ar/' },
          { text: 'الكورس', link: '/ar/1-Intro-to-Git/README' }
        ],
        sidebar: [
          {
            text: 'دورة Git و GitHub',
            items: [
              { text: '1. مقدمة شاملة', link: '/ar/1-Intro-to-Git/README' },
              { text: '2. سير العمل الأساسي', link: '/ar/2-Basic-Workflow/README' },
              { text: '3. الفروع والدمج', link: '/ar/3-Branching-Merging/README' },
              { text: '4. التعاون على GitHub', link: '/ar/4-GitHub-Collaboration/README' },
              { text: '5. أفضل الممارسات والأخطاء', link: '/ar/5-Best-Practices-Conventions/README' },
            ]
          }
        ],
        footer: {
          message: 'تم الإصدار تحت رخصة MIT.',
          copyright: 'حقوق النشر © 2024-الحاضر'
        },
        docFooter: {
          prev: 'الصفحة السابقة',
          next: 'الصفحة التالية'
        },
        outline: {
          label: 'في هذه الصفحة',

        },
        lastUpdated: {
          text: 'آخر تحديث'

        },
        returnToTopLabel: 'العودة إلى الأعلى',
        sidebarMenuLabel: 'القائمة',
        darkModeSwitchLabel: 'المظهر',
        lightModeSwitchTitle: 'التبديل إلى الوضع الفاتح',
        darkModeSwitchTitle: 'التبديل إلى الوضع الداكن',

      }
    }
  }
})


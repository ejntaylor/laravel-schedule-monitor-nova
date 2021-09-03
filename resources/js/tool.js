Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'laravel-schedule-monitor-nova',
      path: '/laravel-schedule-monitor-nova',
      component: require('./components/Tool'),
    },
  ])
})

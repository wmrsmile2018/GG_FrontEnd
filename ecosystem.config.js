module.exports = {
  apps : [
    {
      name      : 'gg-frond-end',
      script    : 'npm',
      args      : 'run start:production',
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  deploy : {
      production : {},
      staging: {
        user: 'your-user',
        host: 'your-server',
        ref: 'origin/master',
        repo: 'git@github.com:wmrsmile2018/GG_FrontEnd.git',
        path: '/var/www/yourprojectpath',
        key: '/absolute/path/to/key',
        ssh_options: ['ForwardAgent=yes'],
        'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
      },
      dev : {}
    }
  };

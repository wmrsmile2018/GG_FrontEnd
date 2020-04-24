module.exports = {
  apps : [{
    script: 'npm',
    args: 'run start:production',
    name: 'gg-frond-end',
    env_production : {
            NODE_ENV: 'production'
        }
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {}
    staging : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'git@github.com:wmrsmile2018/GG_FrontEnd.git',
      path : 'DESTINATION_PATH',
      ssh_options: ['ForwardAgent=yes'],
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    },
    dev : {}
  }
};

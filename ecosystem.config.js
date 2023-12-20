module.exports = {
    apps: [
      {
        name: 'spbsite',
        exec_mode: 'fork',
	port:3010,
	env:{
"port":3010,
"host":"10.10.50.245"
},
        instances: '1',
        script: './.output/server/index.mjs'
      }
    ]
  }

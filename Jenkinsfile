pipeline {
    agent any
    parameters {
        string(name: 'X_VAULT_TOKEN', defaultValue: '', description: 'Token for connection with Vault')
        choice(name: 'environment', choices: ['latest', 'sprint', 'production'], description: 'Environment for tests')
    }
    stages {
        stage("init") {
            steps {
                sh 'npm install'
                sh './hello.sh'
            }
        }
        stage("test") {
            steps {
                echo 'we are running scenario'
            }
        }
    }
}

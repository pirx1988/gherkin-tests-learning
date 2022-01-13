pipeline {
    agent {
        docker {
             image 'node:16-stretch'
             reuseNode true
        }
    }
    parameters {
        string(name: 'X_VAULT_TOKEN', defaultValue: '', description: 'Token for connection with Vault')
        string(name: 'SUITE_ACCOUNT', defaultValue: '', description: 'Account on which scenario/scenarios will be executed')
        string(name: 'Scenario', defaultValue: '', description: 'Scenario for execution')
        choice(name: 'Environment', choices: ['latest', 'sprint', 'production'], description: 'Environment for tests')

    }
    stages {
        stage('Docker container initialize') {
            steps {
                sh 'node --version'
                sh 'yarn --version'
            }
        }
        stage("Install node modules and create .env") {
            steps {
                sh 'npm install'
                sh "./init.sh ${params.Environment} ${params.X_VAULT_TOKEN} ${params.SUITE_ACCOUNT}"
            }
        }
        stage("Feature tests") {
            steps {
                echo 'we are running scenarios'
                sh 'wdio wdio.conf.ts'
            }
        }
    }
}

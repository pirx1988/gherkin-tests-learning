pipeline {
    agent any
    parameters {
        string(name: 'X_VAULT_TOKEN', defaultValue: '', description: 'Token for connection with Vault')
        string(name: 'SUITE_ACCOUNT', defaultValue: '', description: 'Account on which scenario/scenarios will be executed')
        string(name: 'Scenario', defaultValue: '', description: 'Scenario for execution')
        choice(name: 'Environment', choices: ['latest', 'sprint', 'production'], description: 'Environment for tests')

    }
    stages {
        stage('Docker container initialize') {
            agent {
                docker {
                     image 'node:17.3-buster'
                    reuseNode true
                }
            }
            steps {
                sh 'node --version'
                sh 'yarn --version'
            }
        }
        stage("Install node modules and create .env") {
            steps {
                sh 'apt-get update && apt-get install -yq fonts-liberation libasound2 libatk-bridge2.0-0 libatspi2.0-0 libcups2 libdbus-1-3 libdrm2 libgbm1 libgtk-3-0 libgtk-4-1 libnspr4 libnss3 libxcomposite1 libxdamage1 libxfixes3 libxkbcommon0 libxrandr2 xdg-utils'
                sh 'wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb'
                sh 'dpkg -i google-chrome-stable_current_amd64.deb'
                sh 'npm install'
                sh "./init.sh ${params.Environment} ${params.X_VAULT_TOKEN} ${params.SUITE_ACCOUNT}"
            }
        }
        stage("Feature tests") {
            steps {
                echo 'we are running scenarios'
            }
        }
    }
}

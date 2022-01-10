pipeline {
    agent any
    parameters {
        string(name: 'X_VAULT_TOKEN', defaultValue: '', description: 'Token for connection with Vault')
        choice(name: 'environment', choices: ['latest', 'sprint', 'production'], description: 'Environment for tests')
    }
    stages {
        stage("Initialize") {
            steps {
                sh 'npm install'
                sh "./init.sh ${params.environment} ${params.X_VAULT_TOKEN}"
            }
        }
        stage("Feature tests") {
            steps {
                echo 'we are running scenario'
                echo "your X_VAULT_TOKEN is: ${params.X_VAULT_TOKEN}"
                echo "Build on environment: ${params.environment}"
            }
        }
        stage("Cleanup") {
                    steps {
                        sh ''
                    }
                }
    }
}

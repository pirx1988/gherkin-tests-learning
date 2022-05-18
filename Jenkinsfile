pipeline {
    agent any
    environment {
       SECRET_ID = credentials('test')
    }
    parameters {
        string(name: 'X_VAULT_TOKEN', defaultValue: '', description: 'Token for connection with Vault')
        string(name: 'SUITE_ACCOUNT', defaultValue: '', description: 'Account on which scenario/scenarios will be executed')
        string(name: 'Scenario', defaultValue: '', description: 'Scenario for execution')
        choice(name: 'Environment', choices:
        ['latest', 'sprint', 'production (EU1)', 'production (EU3)', 'production (US2)', 'production (US8)', 'production (AU3)'],
        description: 'Environment for tests')
    }
    stages {
        stage('Docker container initialize') {

            steps {
                sh 'node --version'
                sh 'yarn --version'
                sh "echo $SECRET_ID"

            }
        }
        stage("Initialize") {

             steps {
                        sh "./init.sh ${params.Environment} ${params.X_VAULT_TOKEN} ${params.SUITE_ACCOUNT} $SECRET_ID"
             }
        }
    }
}

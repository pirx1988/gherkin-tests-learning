pipeline {
    agent any
    stages {
        stage("build") {
            steps {
                sh 'npm install'
                sh './hello.sh'
            }
        }
        stage("test") {
        }
    }
    post {
        always {

        }
        success {

        }
    }
}
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
            steps {
                echo 'we are running scenario'
            }
        }
    }
    post {
        always {
             steps {
                echo 'finished'
              }

        }
        success {
            steps {
                echo 'success'
            }
        }
    }
}
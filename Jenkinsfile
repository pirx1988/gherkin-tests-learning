pipeline {
    agent any
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

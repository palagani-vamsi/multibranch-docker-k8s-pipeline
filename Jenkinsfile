@Library('my-shared-library') _
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t image3 .'
            }
        }
        stage ("Tag") {
            steps {
                sh 'docker tag image3 palaganivamsi/movie:1.0'
            }
        }
        stage ("Push") {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'mydockerhub') {
                        sh 'docker push palaganivamsi/movie:1.0'
                    }
                }
            }
        }
        stage ("Deploy") {
            steps {
                sh 'docker run -itd --name movie-app -p 3333:80 palaganivamsi/movie:1.0'
            }
        }
    }
    post {
        always {
            notifyBuild('completed', env.RECIPIENT_EMAIL)
        }
        success {
            notifyBuild('successful', env.RECIPIENT_EMAIL)
        }
        failure {
            notifyBuild('failed', env.RECIPIENT_EMAIL)
        }
    }
}

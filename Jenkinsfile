@Library('my-shared-library') _
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t image1 .'
            }
        }
        stage ("Tag") {
            steps {
                sh 'docker tag image1 palaganivamsi/bus:1.0'
            }
        }
        stage ("Push") {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'mydockerhub') {
                        sh 'docker push palaganivamsi/bus:1.0'
                    }
                }
            }
        }
        stage ("Deploy") {
            steps {
                sh 'docker run -itd --name bus-app -p 2222:80 palaganivamsi/bus:1.0'
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

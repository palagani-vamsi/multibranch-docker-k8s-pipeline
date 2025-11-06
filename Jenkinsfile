@Library('my-shared-library') _
pipeline {
    agent any
    environment {
        RECIPIENT_EMAIL = 'vamsi143osg@gmail.com'  // dynamic variable
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t image2 .'
            }
        }
        stage ("Tag") {
            steps {
                sh 'docker tag image2 palaganivamsi/bank:1.0'
            }
        }
        stage ("Push") {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'mydockerhub') {
                        sh 'docker push palaganivamsi/bank:1.0'
                    }
                }
            }
        }
        stage ("Deploy") {
            steps {
                sh 'docker run -itd --name bankApp -p 1113:80 palaganivamsi/bank:1.0'
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

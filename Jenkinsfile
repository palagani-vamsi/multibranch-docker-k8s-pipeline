pipeline {
    agent any

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
}

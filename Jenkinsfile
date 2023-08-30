pipeline {
    agent none
    stages {
        stage('main build') {
            agent {
                dockerfile {
                    filename 'Dockerfile.main'
                    dir 'jenkins'
                }
            }

            stages {
                stage("node version") {
                    steps {
                        sh 'node --version'
                        sh "npm ci"
                        sh 'ls'
                    }
                }
            }
            
        }
    }
}

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

        stage("a11y Tests") {
            agent {
                docker {
                    image "node:16-alpine3.17"
                    reuseNode true
                }
            }
            environment {
                HOME = '.'
            }
            steps {
                sh "node -v"
                echo "a11y stage"
                sh "ls"
            }
        }
    }
}

// pipeline {
//     agent any
//     tools { nodejs "node16" }

//     stages {
//         stage('node versio'){
//             steps {
//                 sh "node -v"
//             }
//         }
        // stage('build remotely') {
        //     steps {
        //         script {
        //             build job: "a11y-test-triggered", wait: true
        //         }
        //     }
        // }

        
//     }
// }

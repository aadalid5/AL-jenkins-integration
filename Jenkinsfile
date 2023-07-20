pipeline {
    agent none
    stages {
        stage('main build') {
            agent {
                docker {
                    image "node:16.20.1-busterl"
                }
            }

            steps {
                stage("node version") {
                    steps {
                        sh 'node --version'
                    }
                }
                
                stage("second stage") {
                    steps {
                        echo "second stage"
                    }
                }
            }
            
        }

        stage("a11y Tests") {
            agent {
                docker {
                    image "mcr.microsoft.com/playwright:v1.30.0-focal"
                    args "-e PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1"
                    reuseNode true
                }
            }
            environment {
                HOME = '.'
            }
            steps {
                sh "node -v"
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

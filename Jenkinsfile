pipeline {
    agent {
        docker { image 'node:18.16.0-alpine' }
    }
    stages {
        stage('Test node inside docker') {
            steps {
                sh 'node --version'
            }
        }

        stage('build remotely') {
            steps {
                script {
                    build job: "a11y-test-triggered", wait: true,
                }
            }
        }
    }
}

// pipeline {
//     agent any
//     tools { nodejs "node16" }

//     stages {
//         // stage ('write to file') {
//         //     steps {
//         //         sh "echo 'NEW LINE' >> npmrc.txt"
//         //         sh "cat npmrc.txt"
//         //     }
//         // }
//         stage('node versio'){
//             steps {
//                 sh "node -v"
//             }
//         }

        
//     }
// }

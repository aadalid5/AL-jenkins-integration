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

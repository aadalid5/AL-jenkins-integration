pipeline {
    agent any
    tools { nodejs "node" }

    stages {
        // stage ('write to file') {
        //     steps {
        //         sh "echo 'NEW LINE' >> npmrc.txt"
        //         sh "cat npmrc.txt"
        //     }
        // }
        stage('node versio'){
            steps {
                sh "node -v"
            }
        }
    }
}

pipeline {
    agent any
    tools { nodejs "node16" }

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

        stage('build remotely') {
            steps {
                script {
                    build job: "a11y-test-triggered", wait: true,
                    parameters: [
                        string(name: 'tags', value: 'main')
                    ]
                }
            }
        }
    }
}

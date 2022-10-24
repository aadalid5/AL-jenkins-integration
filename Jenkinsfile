pipeline {
    agent any

    stages {
        stage ('write to file') {
            steps {
                sh "echo 'NEW LINE' >> npmrc.txt"
                sh "cat npmrc.txt"
            }
        }
    }
}

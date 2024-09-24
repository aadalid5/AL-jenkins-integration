pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile.main'
            dir 'jenkins'
        }
    }

    environment {
        HOME = "." // As we are using docker agents, we need to override HOME env var to allow to create cache directory (~/.npm).
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

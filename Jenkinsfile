pipeline {
    agent any
    
    tools { nodejs "18.8.0" }
    
    environment {
        FOO = "initial FOO value"
        version=''
    }

    stages {
        stage ('write to file') {
            steps {
                sh "cat npmrc.txt"
                sh "echo 'abcd' >> npmrc.txt"
                sh "cat npmrc.txt"
            }
        }

        stage('deploy') {
            steps {
                // 1 calculate next app  but not bumb version
                script{
                    version = calculateNextVersion()
                    echo version
                }
            }
        }

    }
}

def calculateNextVersion(){
    env_releaseType = 'patch' // 'minor' 'major'
    currentVersion = sh(script: "npm pkg get version | sed 's/\"//g'" , returnStdout: true)

    if(env_releaseType != "none"){
        newVersion = sh(script: "npx semver -i ${env_releaseType} ${currentVersion}", returnStdout:true)
        return newVersion
    } else {
        return currentVersion
    }


}

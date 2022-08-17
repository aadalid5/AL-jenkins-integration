pipeline {
    agent any
    
    tools { nodejs "node" }
    
    environment {
        FOO = "initial FOO value"
    }

    stages {
        stage('deploy') {
            steps {
                // 1 calculate next app  but not bumb version
                script{
                    versionToDeploy = calculateNextVersion()
                    echo versionToDeploy
                }

            }
        }

        stage('post-release') {
            
        }

    }
}

def calculateNextVersion(){
    env_releaseType = 'minor' // 'minor' 'major'
    currentVersion = sh(script: "npm pkg get version | sed 's/\"//g'" , returnStdout: true)

    def splitVersion = currentVersion.tokenize('.')

    switch(env_releaseType) {
        case 'patch':
            int patch = splitVersion[2] as int
            splitVersion[2] = patch + 1
            break
        case 'minor':
            int minor = splitVersion[1] as int
            splitVersion[1] = minor + 1
            break
        case 'major':
            int major = splitVersion[0] as int
            splitVersion[0] = major + 1
            break
        default:
            break
    }

    newVersion = 'v' + splitVersion.join('.')

    return newVersion

}
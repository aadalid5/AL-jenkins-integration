pipeline {
    agent any
    
    tools { nodejs "node" }
    
    environment {
        FOO = "initial FOO value"
    }

    stages {
        stage('deploy') {
            steps {
                // 2 if deploy succeed, increment tag
                script{
                    echo "DEPLOY WORKS"
                    //echo calculateNextVersion()
                }

                echo calculateNextVersion()


            }
        }

    }
}

def calculateNextVersion(){
    env_releaseType = 'minor' // 'minor' 'major'
    currentVersion = sh(script: "npx project-version", returnStdout: true)

    def versionSplitted = currentVersion.tokenize('.')

    switch(env_releaseType) {
        case 'patch':
            int patch = versionSplitted[2] as int
            versionSplitted[2] = patch + 1
            break
        case 'minor':
            int minor = versionSplitted[1] as int
            versionSplitted[1] = minor + 1
            break
        case 'major':
            int major = versionSplitted[0] as int
            versionSplitted[0] = major + 1
            break
        default:
            break
    }

    newVersion = 'v' + versionSplitted.join('.')

    return newVersion

}
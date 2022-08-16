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
                    //echo getNextVersion()
                }

                echo getNextVersion()


            }
        }

    }
}

def getNextVersion(){
    env_releaseType = 'patch' // 'minor' 'major'
    currentVersion = '1.0.11'
    newVersion = ""

    def splitted = currentVersion.tokenize('.')
    switch(env_releaseType) {
        case 'patch':
            splitted[2] = Integer splitted[2] + 1
            break
        case 'minor':
            splitted[1] = Integer splitted[1] + 1
            break
        case 'major':
            splitted[0] = Integer splitted[0] + 1
            break
        default:
            break
    }

    return splitted.join('.')

}
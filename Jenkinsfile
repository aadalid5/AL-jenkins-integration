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

                //echo getNextVersion()


            }
        }

    }
}

def getNextVersion(){
    env_releaseType = 'patch' // 'minor' 'major'
    currentVersion = sh(script: "npx project-version", returnStdout: true)
    newVersion = ""

    def splitted = currentVersion.split('.')
    assert splitted[0] = 1
    assert splitted[1] = 0
    assert splitted[2] = 11
}
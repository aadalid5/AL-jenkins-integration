pipeline {
    agent any
    
    tools { nodejs "node" }
    
    environment {
        FOO = "initial FOO value"
        version=''
    }

    stages {
        stage('deploy') {
            steps {
                // 1 calculate next app  but not bumb version
                script{
                    version = calculateNextVersion()
                    echo version
                }
                populateBuildUploadDocker()

            }
        }

    }
}

def calculateNextVersion(){
    env_releaseType = 'patch' // 'minor' 'major'
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
            splitVersion[0] = major + 1
            break
        default:
            break
    }

    newVersion = splitVersion.join("\.")

    return newVersion

}

def populateBuildUploadDocker() {
    echo "Building Docker image workspace"
    sh "cp Dockerrun.aws.skel.json Dockerrun.aws.json"
    sh "sed -e 's/__VERSION__/${version}/g' -i.bak Dockerrun.aws.json"

    echo "Building Docker image"
}
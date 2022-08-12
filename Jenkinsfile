pipeline {
    agent any
    
    tools { nodejs "Node" }
    
    environment {
        FOO = "initial FOO value"
    }

    stages {
        stage('deploy') {
            steps {
                
                script {
                    sh "git fetch --tags"
                    echo "FOO is '${FOO}'" 
                }
                sshagent(["aadalid5"]) {
                    script{ 
                        // echo "FOO is '${FOO}'" 
                        // sh "git push --tags"
                        // sh "npx release-it@14.14.3 --no-npm --no-git --no-increment --github.release --ci"

                        //FOO = sh(script: "npm version patch --commit-hooks=false -m 'bump version to %s'", returnStdout: true)
                        sh "git push --tags"
                        sh "npx release-it@14.14. --no-npm --no-git --no-increment --github.release --ci"
                        
                    }
                }
                
                echo "DEPLOY WORKS"
                
            

            }
        }

        stage('post-release') {
            steps {
                
            echo "FOO is '${FOO}'" 
            }
        }

        
        // stage('Build') {
        //     steps {
        //         sh "node -v"
        //         sh "echo 'hello pipeline' "
        //         sh "whoami"
        //         sh "pwd"
        //         sh "cat /etc/*release"
        //         sh "echo 'HOLAAAAAAAAA'"
        //         echo "The build number is ${env.BUILD_NUMBER}" 
        //         //sh "git tag v3"
        //         // sh "git tag"
        //         // sh "git push --tags"
        //     }
        // }

        // stage("post-release") {
        //     steps {
        //         sshagent(["jenkins-git"]) {
        //             script {
        //                 sh "git fetch"                        
        //                 sh "npx release-it@14.14.3 --no-npm --no-git --no-increment --github.release --ci"
        //             }
        //         }
        //     }
        // }
        
    }
}
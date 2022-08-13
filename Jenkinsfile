pipeline {
    agent any
    
    //tools { nodejs "Node" }
    
    environment {
        FOO = "initial FOO value"
    }

    stages {
        stage('deploy') {
            steps {
                sshagent(["github-key-a-id"]) {
                    script{ 
                        echo "FOO is '${FOO}'" 

                        // sh "npx release-it@14.14.3 --no-npm --no-git --no-increment --github.release --ci"

                        //FOO = sh(script: "npm version patch --commit-hooks=false -m 'bump version to %s'", returnStdout: true)
                        
                        // sh 'git ls-remote -h --refs git@github.com:aadalid5/jenkins-integration.git main | awk "{print $1}"'
                        // sh 'git remote set-url origin https://{aadalid5}:{5jmunjg8}@github.com/{aadalid5}/jenkins-integration.git'
                        sh 'git remote set-url origin  git@github.com:aadalid5/jenkins-integration.git'
                        sh 'git push --tags'
                        // sh "npx release-it@14.14. --no-npm --no-git --no-increment --github.release --ci"
                        
                    }
                }
                
                echo "DEPLOY WORKS"
                
            

            }
        }

        // stage('post-release') {
        //     steps {
                
        //     echo "FOO is '${FOO}'" 
        //     }
        // }
        
    }
}
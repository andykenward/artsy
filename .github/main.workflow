workflow "Build and deploy on push" {
  on = "push"
  resolves = ["deploy"]
}

action "install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}

action "codegen" {
  uses = "Borales/actions-yarn@master"
  needs = ["install"]
  args = "codegen"
  secrets = ["SCHEMA_PATH", "REACT_APP_API"]
}

action "lint" {
  uses = "Borales/actions-yarn@master"
  args = "lint:ci"
  secrets = ["REACT_APP_API", "SCHEMA_PATH"]
  needs = ["install","codegen"]
}

action "type-check" {
  uses = "Borales/actions-yarn@master"
  needs = ["install","codegen", "lint"]
  args = "type-check"
  secrets = ["REACT_APP_API", "SCHEMA_PATH"]
}

action "test" {
  uses = "Borales/actions-yarn@master"
  secrets = ["REACT_APP_API", "SCHEMA_PATH"]
  args = "test"
  needs = ["install","codegen", "lint", "type-check"]
}

action "build" {
  uses = "Borales/actions-yarn@master"
  secrets = ["REACT_APP_API", "SCHEMA_PATH"]
  args = "build"
  needs = ["install","codegen","lint","type-check","test"]
}

action "deploy" {
  uses = "andykenward/deploy-now@master"
  secrets = ["GITHUB_TOKEN", "NOW_TOKEN"]
  needs = ["build"]
}

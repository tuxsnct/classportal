import { Command, flags } from '@oclif/command'
import { copySync, existsSync, mkdirSync } from 'fs-extra'
import { execSync } from 'child_process'
import { join } from 'path'
import { chdir, cwd } from 'process'

export default class New extends Command {
  static description = 'generate a new project from the template'

  static examples = [
    `$ cpcli new classportal @classportal/template`
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    pm: flags.string({
      char: 'p',
      options: ['npm', 'yarn'],
      default: 'npm'
    })
  }

  static args = [
    {
      name: 'directory',
      required: true
    },
    {
      name: 'template',
      required: true,
      default: '@classportal/template'
    }
  ]

  async run() {
    const {args, flags} = this.parse(New)

    if (!existsSync(args.directory)) {
      try {
        mkdirSync(args.directory)
        this.log(`${args.directory} directory has been created.`)
      } catch (e) {
        this.error(`${args.directory} directory was not created.`)
      }
    }

    chdir(join(cwd(), args.directory))

    switch (flags.pm) {
      case 'npm':
        execSync(`npm init -y`)
        this.log(`directory has been initialized.`)
        execSync(`npm install ${args.template}`)
        copySync(join(cwd(), 'node_modules', args.template), join(cwd()))
        execSync(`npm install`)
        this.log(`dependencies has been installed.`)
        break
      case 'yarn':
        execSync(`yarn init -y`)
        this.log(`directory has been initialized.`)
        execSync(`yarn add ${args.template}`)
        copySync(join(cwd(), 'node_modules', args.template), join(cwd()))
        execSync(`yarn` )
        this.log(`dependencies has been installed.`)
        break
      default:
        this.error('an unsupported package manager has been specified.')
    }

    this.log(`run \`cd ${args.directory}\` to start using ClassPortal.`)
  }
}

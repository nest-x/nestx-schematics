import * as path from 'path';
import {SchematicTestRunner} from '@angular-devkit/schematics/testing';
import {ApplicationOptions} from '../application.schema';


describe('Application Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(),'src/collection.json')
  )

  it('should manage name only', async () => {
    const options: ApplicationOptions = {
      name: 'project'
    };

    const tree = await  runner.runSchematicAsync('application', options).toPromise()
    const files = tree.files;

    expect(files).toEqual([
      '/project/README.md'
    ])
  })

})

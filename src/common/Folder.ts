import {Path} from './Path';
import {IBucketObject} from './IBucketObject';

export class Folder implements IBucketObject {
  /**
   * Absolute path.
   */
  private path: Path;

  /**
   * True if folder is deleted.
   */
  private deleted: boolean;

  /**
   * Create a folder instance.
   */
  constructor (path: Path, deleted: boolean = false) {
    this.path = path;
    this.deleted = deleted;
    if (!this.path.isFolder()) {
      throw new Error(`Folder instance given a file path: ${path}`);
    }
  }

  /**
   * Get the absolute path.
   */
  public getPath(): Path {
    return this.path;
  }

  /**
   * Get the parent folder.
   */
  public parent(): Folder {
    return new Folder(this.path.clone().pop());
  }
}

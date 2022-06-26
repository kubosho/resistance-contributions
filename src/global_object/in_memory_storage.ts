import { DOMStorageLike } from './dom_storage_like'

/**
 *  This should behave like DOM storage.
 */
export class InMemoryStorage implements DOMStorageLike {
  private _map: Map<string, string>
  constructor() {
    this._map = new Map()
  }

  get length(): number {
    return this._map.size
  }

  key(index: number): string | null {
    return Array.from(this._map.keys())[index]
  }

  getItem(key: string): string | null {
    const raw: string | undefined = this._map.get(key)
    return raw ?? null
  }

  setItem(key: string, value: string | null | undefined): void {
    const v: string = value ?? String(value)
    this._map.set(key, v)
  }

  removeItem(key: string): void {
    this._map.delete(key)
  }

  clear(): void {
    this._map.clear()
  }
}

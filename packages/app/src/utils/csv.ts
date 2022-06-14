import Papa from 'papaparse'

/**
 *
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/papaparse/papaparse-tests.ts
 */
export async function parseCsv<T>(file: File) {
  return new Promise<Papa.ParseResult<T>>((resolve, reject) => {
    Papa.parse<T>(file, {
      header: true,
      skipEmptyLines: true,
      transform: (value: string): string => {
        return value.trim()
      },
      complete: (results) => {
        return resolve(results)
      },
      error: (error) => {
        return reject(error)
      },
    })
  })
}

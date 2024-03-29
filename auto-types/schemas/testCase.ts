/* tslint:disable */
export interface TestCase {
  /**
   * Unique id
   */
  id: string;
  /**
   * Title
   */
  title: string;
  /**
   * Test case description
   */
  description?: string;
  /**
   * Test suite id
   */
  testSuiteId: string;
  displayOrder: number;
}


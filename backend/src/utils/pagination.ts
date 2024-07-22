export interface PaginatedResult<T> {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    data: T[];
  }
  
  export const paginate = <T>(items: T[], page: number, limit: number): PaginatedResult<T> => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedItems = items.slice(startIndex, endIndex);
  
    return {
      page,
      limit,
      total: items.length,
      totalPages: Math.ceil(items.length / limit),
      data: paginatedItems,
    };
  };
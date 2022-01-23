def merge_sort(arr):
    if len(arr) <= 1:
        return

    mid = len(arr) // 2
    left = arr[:mid]
    right = arr [mid:]

    merge_sort(left)
    merge_sort(right)

    merge_sort_list(left, right, arr)
    # binar_search(arr, )

def merge_sort_list(a, b, arr):
    lena = len(a)
    lenb = len(b)

    i = j = k = 0

    while i < lena and j < lenb:
        if a[i] <= b[j]:
            arr[k] = a[i]
            i+=1
        else:
            arr[k] = b[j]
            j+=1
        k+=1

    while i < lena:
        arr[k] = a[i]
        i+=1
        k+=1

    while j < lenb:
        arr[k] = b[j]
        j+=1
        k+=1

def binar_search(arr, query):
    lo = 0
    li = len(arr) - 1

    while lo <= li:
        mid = len(arr) // 2

        if arr[mid] == query:
            return mid
        elif arr[mid] < query:
            return mid -1 
        elif arr[mid] > query:
            return mid+1
        return -1



if __name__ == '__main__':
    arr = [1,3,2]
    merge_sort(arr)
    print(binar_search(arr,2.5000))
    print(arr)

def solution(a)
    a.sort!
  
    longest_spike = 1
    current_spike = 1
  
    (1...a.length).each do |i|
      if a[i] > a[i - 1]
        current_spike += 1
        longest_spike = [longest_spike, current_spike].max
      else
        current_spike = 1
      end
    end
  
    longest_spike
  end